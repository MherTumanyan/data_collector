import { Kafka, ProducerRecord } from 'kafkajs';
import { getPost } from '../posts';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
});

const topicToSend = process.env.TOPIC_TO_SEND || 'data_processing';

const producer = kafka.producer();

const wait = (ms: number) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};

export const produceMessage = async () => {
  try {
    await producer.connect();
    for (let i = 1; i <= 100; i++) {
      try {
        const post = await getPost(i.toString());
        const message: ProducerRecord = {
          topic: topicToSend,
          messages: [{ value: JSON.stringify(post) }],
        };
        const result = await producer.send(message);
        await wait(5000);
        console.log(`Produced message at ${result[0].topicName}`);
      } catch (err) {
        console.error(`Error producing message: ${err}`);
      }
    }
  } finally {
    await producer.disconnect();
  }
};
