import { useRouter } from "vue-router";

export const useNavigation = () => {
  const router = useRouter();

  const goPage = (path: string) => {
    console.log("페이지 이동", path);
    router.push(path);
  };

  return { goPage };
};
