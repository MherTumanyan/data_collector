# Data Collector Service

A Node.js service to collect data from various sources and push it to Kafka.

## Installation

1. Clone the repository
2. Install dependencies by running `npm install`
3. Create a copy of `.env.example` file and name it `.env`. Fill out the required environment variables in `.env` file.

## Running the Service

To start the service, run `npm run start`. This will build the service and start the server.

## Environment Variables

This service requires the following environment variables:

- `JWT_SECRET`: a secret key used to sign JWT tokens.
- `KAFKA_HOST`: the host and port number of Kafka server, e.g. `localhost:9092`.
- `TOPIC_TO_SEND`: the name of the Kafka topic to send data to.

## Usage

### Kafka Producer

This service is capable of sending data to Kafka topics. 
- `topic`: the name of the Kafka topic to send data to.
- `data`: a JSON object containing the data to be sent.

### Data Fetching and Sending to Kafka

The `produceMessage` function is responsible for fetching data from a remote API and sending it to the Kafka topic specified in the `TOPIC_TO_SEND` environment variable. The function is defined in `src/kafka/producer.ts` file.
