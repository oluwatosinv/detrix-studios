import React, { useState, useCallback } from "react";
import { MDBContainer } from "mdbreact";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import ButtonMore from "./Button";

function LoladeAndLanre() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <MDBContainer className='galleyLolade'>
      <h1 className='galleryTittle'>Lolade and Lanre</h1>
      <Gallery photos={photos} onClick={openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <a target="_blank" href="https://detrixstudios.pixieset.com/loladeandlanre/">
          <ButtonMore />
      </a>
    </MDBContainer>
  );
}

export default LoladeAndLanre;
