import { Card, List, Typography } from "antd";
import React from "react";

const FormView = (props) => {
  const { formValue } = props;
  const { Title, Text } = Typography;

  return (
    <Card title="Submitted Data" style={{ marginTop: 20 }}>
      <Title level={4}>First Name</Title>
      <Text>{formValue.firstName}</Text>

      <Title level={4}>Last Name</Title>
      <Text>{formValue.lastName}</Text>

      <Title level={4}>Phone Numbers</Title>
      <List
        dataSource={formValue.phone}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Text>{`Number: ${item.number}, Person Name: ${item.personName}`}</Text>
          </List.Item>
        )}
      />

      <Title level={4}>Addresses</Title>
      <List
        dataSource={formValue.address}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Text>{`Address: ${item.address}, Address Type: ${item.addressType}`}</Text>
          </List.Item>
        )}
      />

      <Title level={4}>Remarks</Title>
      <Text>{formValue.remarks}</Text>

      <Title level={4}>Reference</Title>
      <Text>{formValue.reference}</Text>
    </Card>
  );
};

export default FormView;
