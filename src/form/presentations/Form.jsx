import { Button, Form, Input, message, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context";

const FormUI = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { formValue, setFormValue } = useContext(FormContext);

  const onFinish = (values) => {
    setFormValue({ ...values });
    console.log("Form values:", values);
    message.success("Form submitted successfully");
    navigate("/form-item");
  };

  const onFinishFailed = () => {
    message.error("Please fill all the required fields");
  };

  return (
    <Form
      form={form}
      name="customer_form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      initialValues={{
        phone: [{ number: "", personName: "" }],
        address: [{ address: "", addressType: "" }],
      }}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: "First Name is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: "Last Name is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.List name="phone">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "number"]}
                  rules={[
                    { required: true, message: "Phone number is required" },
                  ]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "personName"]}
                  rules={[
                    { required: true, message: "Person name is required" },
                  ]}
                >
                  <Input placeholder="Person Name" />
                </Form.Item>
                {fields.length > 1 && (
                  <MinusCircleOutlined onClick={() => remove(name)} />
                )}
              </Space>
            ))}
            {fields.length < 4 && (
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Phone
                </Button>
              </Form.Item>
            )}
          </>
        )}
      </Form.List>

      <Form.List name="address">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "address"]}
                  rules={[{ required: true, message: "Address is required" }]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "addressType"]}
                  rules={[
                    { required: true, message: "Address type is required" },
                  ]}
                >
                  <Input placeholder="Address Type" />
                </Form.Item>
                {fields.length > 1 && (
                  <MinusCircleOutlined onClick={() => remove(name)} />
                )}
              </Space>
            ))}
            {fields.length < 4 && (
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Address
                </Button>
              </Form.Item>
            )}
          </>
        )}
      </Form.List>

      <Form.Item
        name="remarks"
        label="Remarks"
        rules={[{ required: true, message: "Remarks are required" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="reference"
        label="Reference"
        rules={[{ required: true, message: "Reference is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormUI;
