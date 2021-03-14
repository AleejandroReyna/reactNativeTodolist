import React, { useCallback } from "react"
import { Button, Linking, Alert } from "react-native"
import { Text } from '@ui-kitten/components'
 
export const HomeLink = ({ url, title }:HomeLinkProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Text onPress={handlePress} status="danger">{title}</Text>;
}

interface HomeLinkProps {
  url: string,
  title: string
}