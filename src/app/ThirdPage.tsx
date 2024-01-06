import { pageCursor } from "@/utils/atom";
import { Button, Row, Typography } from "antd";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function ThirdPage() {
  const [cursor, setCursor] = useAtom(pageCursor);

  return (
    <Container className="py-5">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Typography.Title level={3} className="text-center my-0">
          Let&apos;s Rewind our Journey!
        </Typography.Title>
      </motion.div>
      <motion.div
        className="rounded-circle mx-auto my-4"
        style={{ width: 200, height: 200, overflow: "hidden" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src={"/rewind-photo.jpeg"}
          width={200}
          height={500}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            transform: "translateY(-70px) translateX(5px) scale(1.2)",
          }}
          alt="Salma's Photo"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Typography.Paragraph className="text-center my-0">
          I&apos;ve collected our 23 photos in a year. Just like your old today,
          23 years old. Yeayy! Do you still remember our journey?
        </Typography.Paragraph>
      </motion.div>
      <Row style={{ maxWidth: 600 }} className="mx-auto">
        <Col xs={6} className="p-2">
          {[...Array(23)].map(
            (_, key: number) =>
              key % 2 === 0 && (
                <motion.div
                  key={key}
                  className="rounded w-100 my-3"
                  style={{ overflow: "hidden" }}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: key * 0.5 + 0.5 }}
                >
                  <Image
                    src={`/rewind-${key + 1}.jpeg`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="Salma's Photo"
                  />
                </motion.div>
              )
          )}
        </Col>
        <Col xs={6} className="p-2">
          {[...Array(23)].map(
            (_, key: number) =>
              key % 2 !== 0 && (
                <motion.div
                  key={key}
                  className="rounded w-100 my-3"
                  style={{ overflow: "hidden" }}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: key * 0.5 + 0.8 }}
                >
                  <Image
                    src={`/rewind-${key + 1}.jpeg`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="Salma's Photo"
                  />
                </motion.div>
              )
          )}
        </Col>
      </Row>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          className="mx-auto d-block mt-4"
          size="large"
          onClick={() => setCursor(cursor + 1)}
        >
          Always Remember!
        </Button>
      </motion.div>
    </Container>
  );
}
