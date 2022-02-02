import { useHistory } from "react-router-dom";
import { Menu, MenuItem, Logo } from "./styles";
import LocalBarIcon from "@material-ui/icons/LocalBar";

const Header = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <Menu>
      <MenuItem onClick={() => sendTo("/")}>Início</MenuItem>
      <MenuItem onClick={() => sendTo("/pagewedding")}>Casamento</MenuItem>
      <Logo>
        get Drink
        <LocalBarIcon
          style={{
            width: "50px",
            height: "50px"
          }}
        />
      </Logo>
      <MenuItem onClick={() => sendTo("/pageconfraternization")}>
        Confraternização
      </MenuItem>
      <MenuItem onClick={() => sendTo("/pagegraduation")}>Formatura</MenuItem>
    </Menu>
  );
};

export default Header;
