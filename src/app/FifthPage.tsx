import { pageCursor } from "@/utils/atom";
import { Button, Typography } from "antd";
import { useAtom } from "jotai";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function FifthPage() {
  const [cursor, setCursor] = useAtom(pageCursor);
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Typography.Title level={3} className="text-center my-0">
            I have something special!
          </Typography.Title>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typography.Paragraph className="text-center my-0">
            I&apos;ve prepared some gifts for you. Are you ready for it?
          </Typography.Paragraph>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            className="mx-auto d-block mt-4"
            size="large"
            onClick={() => setCursor(cursor + 1)}
          >
            What?!
          </Button>
        </motion.div>
      </div>
    </Container>
  );
}
