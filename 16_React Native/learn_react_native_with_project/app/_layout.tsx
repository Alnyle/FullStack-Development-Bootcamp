import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";


function RouteGuard({children}: { children: React.ReactNode }) {


  const router = useRouter();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      router.replace('/auth')
    }
  })

  return (
    <>
      {children}
    </>
  )
}


// RootLayout where put share components across different screen 'root'
export default function RootLayout() {
  return (
  <RouteGuard>
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }}/>
    </Stack>
  </RouteGuard>
  );
}
