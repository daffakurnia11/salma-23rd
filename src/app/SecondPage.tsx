"use client";

import { pageCursor } from "@/utils/atom";
import { Button, Typography } from "antd";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function SecondPage() {
  const [cursor, setCursor] = useAtom(pageCursor);

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <motion.div
          className="rounded-circle mx-auto mb-4"
          style={{ width: 200, height: 200, overflow: "hidden" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Image
            src={"/first-photo.jpeg"}
            width={200}
            height={500}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              transform: "translateY(-20px)",
            }}
            alt="Salma's Photo"
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Typography.Title level={4} className="text-center my-0">
            HAPPY 23rd BIRTHDAY!
          </Typography.Title>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typography.Title level={3} className="text-center my-2">
            SALMA QOTRUNNADA HAMIDAH
          </Typography.Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Typography.Paragraph className="text-center my-0">
            It&apos;s been a while since we celebrated your 22nd birthday last
            year. This year we are celebrating your second birthday in 23 years
            old!
          </Typography.Paragraph>
        </motion.div>
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
            Yeeyy!
          </Button>
        </motion.div>
      </div>
    </Container>
  );
}
