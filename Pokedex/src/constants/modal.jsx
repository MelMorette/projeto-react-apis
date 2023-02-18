import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import pokemonAdicionado from "../assets/pokemoAdicionado.png";
import pokemonRemovido from "../assets/pokemonRemovido.png";

export function BasicUsageAdd() {
  const context = useContext(GlobalContext);
  const { isOpen, onClose } = context;
  const location = useLocation();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {(() => {
              switch (location.pathname) {
                case "/":
                  return (
                    <img src={pokemonAdicionado} alt="Pokemón Capturado!" />
                  );
                case "/Pokedex":
                  return <img src={pokemonRemovido} alt="Pokemón Removido!" />;
                default:
                  return <img src={pokemonRemovido} alt="Pokemón Removido!" />;
              }
            })()}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
