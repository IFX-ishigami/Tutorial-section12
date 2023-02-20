import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type PropsMIB = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<PropsMIB> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      displauy={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
