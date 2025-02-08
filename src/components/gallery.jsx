import React, { useState, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TulipsGallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback(index => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { file: { contentType: { eq: "image/jpeg" } } }
      ) {
        nodes {
          gatsbyImageData(quality: 100)
          file {
            url
            details {
              image {
                height
                width
              }
            }
          }
        }
      }
    }
  `)

  const photos = allContentfulAsset.nodes.map(item => ({
    src: item.file.url,
    width: item.file.details.image.width,
    height: item.file.details.image.height,
    gatsbyImage: getImage(item.gatsbyImageData),
  }))

  const imageRenderer = ({ index, key, photo }) => (
    <GatsbyImage
      key={key}
      style={{
        height: photo.height,
        width: photo.width,
        margin: 2,
        borderRadius: 8,
        cursor: "pointer",
        overflow: "hidden",
      }}
      index={index}
      image={photo.gatsbyImage}
      alt="🌷"
      onClick={() => openLightbox(index)}
    />
  )

  return (
    <>
      <Gallery
        photos={photos}
        direction="row"
        targetRowHeight={500}
        renderImage={imageRenderer}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} allowFullscreen={false}>
            <Carousel currentIndex={currentImage} views={photos} />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default TulipsGallery
