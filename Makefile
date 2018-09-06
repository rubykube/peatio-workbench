.PHONY: build prepare run test stress seed down setup-apps

COMPOSE = docker-compose

default: run

build:
	$(COMPOSE) build peatio      \
	                 barong      \
	                 trading_ui  \
	                 vault       \
	                 db          \
	                 phpmyadmin  \
	                 redis       \
	                 rabbitmq    \
	                 mailcatcher \
	                 ranger      \
	                 coinhub     \
	                 integration

geth:
	@$(COMPOSE) up -d geth

bitcoin:
	@echo "Updating peatio configuration..."
	@cp config/peatio-seed-btc/*.yml config/peatio/seed/
	@echo "Starting bitcoind container..."
	@$(COMPOSE) up -d bitcoind

cryptonodes: geth

daemons:
	$(COMPOSE) up --build -d withdraw_audit           \
	                         blockchain               \
	                         deposit_collection       \
	                         deposit_collection_fees  \
	                         deposit_coin_address     \
	                         slave_book market_ticker \
	                         matching                 \
	                         order_processor          \
	                         trade_executor           \
	                         withdraw_coin

dependencies:
	$(COMPOSE) up -d vault db phpmyadmin redis rabbitmq mailcatcher ranger coinhub
	$(COMPOSE) run --rm vault secrets enable totp || true

prepare: dependencies daemons cryptonodes

setup-apps: build
	$(COMPOSE) run --rm peatio bash -c "./bin/link_config && bundle exec rake db:create db:migrate db:seed"
	$(COMPOSE) run --rm barong bash -c "./bin/link_config && ./bin/setup"

run: prepare setup-apps
	$(COMPOSE) up --build -d peatio barong trading_ui proxy

test:
	@$(COMPOSE) run --rm integration

stress:
	@bundle exec rake toolbox:run

start: prepare setup-apps
	$(COMPOSE) up -d peatio barong trading_ui proxy

update:
	git submodule update --init --remote

down:
	@$(COMPOSE) down
