import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { type FormTypes } from "~/components/Form/formTypes";
import { useForm, Controller } from "react-hook-form";

import { fields } from "~/components/Form/fields";

import styles from "~/components/Form/Form.module.scss";

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormTypes>({});
  const onSubmit = (data: FormTypes) => {
    console.log(data);
  };
  return (
    <Box
    className={styles["form"]}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      ml={"auto"}
      mr={"auto"}
      mt={5}
      textAlign={"center"}
    >
      <Typography variant="h3">Application Form</Typography>
      <Typography variant="h4">Personal Information</Typography>
      <Stack gap={2} alignContent="column">
        {fields.map((input) => (
          <Controller
            key={input.id}
            name={input.name as keyof FormTypes}
            control={control}
            rules={input.rules}
            render={({ field }) => (
              <TextField
                {...field}
                label={input.label}
                error={!!errors[input.name as keyof FormTypes]}
                multiline={input.multiline}
                rows={4}
                helperText={
                  errors[input.name as keyof FormTypes]
                    ? "This field is required"
                    : ""
                }
              />
            )}
          />
        ))}
        <Controller 
          name="pdfFiles"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Button variant="outlined" component="label">
              Upload PDF
              <input type="file" 
              accept=".pdf"
              multiple
              hidden
              onChange={(e) => field.onChange(e.target.files)}
              />
            </Button>
          )}
        />
        <Controller 
          name="pdfFiles"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Button variant="outlined" component="label">
              Upload Screenshots
              <input type="file" 
              accept="image/*"
              multiple
              hidden
              onChange={(e) => field.onChange(e.target.files)}
              />
            </Button>
          )}
        />
        <Button type="submit">Submit Form</Button>
      </Stack>
    </Box>
  );
}

export default Form;
