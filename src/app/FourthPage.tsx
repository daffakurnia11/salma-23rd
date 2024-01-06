import { pageCursor } from "@/utils/atom";
import { Button, Typography } from "antd";
import { useAtom } from "jotai";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function FourthPage() {
  const [cursor, setCursor] = useAtom(pageCursor);
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <motion.video
          className="d-block mx-auto mb-3 rounded"
          autoPlay
          loop
          style={{ width: "auto", height: "300px" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <source src="/rewind-video.mp4" />
        </motion.video>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Typography.Paragraph className="text-center my-0">
            Again, <strong>Happy 23rd Birthday, Salma!</strong>
          </Typography.Paragraph>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Typography.Paragraph className="text-center my-0">
            I hope that as you grow older, you become stronger than before. May
            you be wiser, more mature, more responsible, and more patient with
            me, hehe. Don&apos;t forget to always be steadfast and consistent in
            worshiping Allah, keep drawing closer to Allah, so that you continue
            to be blessed with sustenance, health, and the happiness that you
            aspire for.
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
            Aamiin!
          </Button>
        </motion.div>
      </div>
    </Container>
  );
}
