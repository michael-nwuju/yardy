import React, { useState } from "react";
import { FlatList } from "react-native";
import Avatar from "../components/Avatar";
import ItemSeparator from "../components/ItemSeparator";
import ItemDeleteAction from "../components/ItemDeleteAction";
import Icon from "../components/Icon";

const initialMessages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: "https://picsum.photos/200/300",
  },
];

const MessagesScreen: React.FC = () => {
  const [refreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message: any) => {
    setMessages(
      messages.filter(initialMessage => initialMessage.id !== message.id)
    );
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) => (
        <Avatar
          title={item.title}
          subTitle={item.description}
          IconComponent={<Icon name="email" />}
          renderRightActions={() => (
            <ItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      refreshing={refreshing}
      onRefresh={() => setMessages([initialMessages[0]])}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MessagesScreen;
