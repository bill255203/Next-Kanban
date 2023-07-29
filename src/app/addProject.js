"use client";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import ProjectForm from "./projectForm";
const addProject = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Modal opened={opened} onClose={close} title="+ ADD Project" centered>
        <ProjectForm />
      </Modal>
      <Group position="center">
        <Button
          onClick={open}
          className="add bg-red-400 h-[75px] p-[15px] m-[15px] rounded-md ml-[50px] text-[20px] text-center font-bold"
        >
          + ADD Project
        </Button>
      </Group>
    </div>
  );
};

export default addProject;
