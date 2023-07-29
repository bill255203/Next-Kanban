import React from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

const taskForm = ({ onClose }) => {
  const form = useForm({
    initialValues: {
      name: "",
      content: "",
      explanation: "",
    },
  });

  // Access the initial values from the form object
  const { name, content, explanation } = form.values;

  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          onClose(); // Close the modal after the form is submitted
        })}
      >
        <TextInput
          withAsterisk
          label="Project Name"
          placeholder="Eat"
          className="mb-[10px]"
          value={name}
          onChange={(event) =>
            form.setFieldValue("name", event.currentTarget.value)
          }
        />
        <TextInput
          withAsterisk
          label="Project Content"
          placeholder="banana"
          className="mb-[10px]"
          value={content}
          onChange={(event) =>
            form.setFieldValue("content", event.currentTarget.value)
          }
        />
        <TextInput
          label="Explanations"
          className="mb-[10px]"
          value={explanation}
          onChange={(event) =>
            form.setFieldValue("explanation", event.currentTarget.value)
          }
        />
        <Group position="right" mt="md">
          <Button type="submit" className="bg-blue-400">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default taskForm;
