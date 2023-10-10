import React, { useState } from "react";
import { Button, Modal } from "antd";
import ModalContent from "../ModalContent";

const TopAiringCard = ({ image, name, type, rank }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative w-[92%] cursor-pointer active:cursor-grabbing transition-all ease-in-out overflow-hidden active:scale-90"
        onClick={showModal}
      >
        <div
          className="w-full h-[250px] lg:h-[320px] bg-cover "
          style={{ backgroundImage: `url(${image.webp.large_image_url})` }}
        >
          {/* <img className="h-full w-full" src={image.webp.large_image_url} alt={name} /> */}
          {/* <div className="absolute -left-10 lg:-left-10 -top-8 h-16 w-16">
            <div className="absolute transform -rotate-45 font-sans border-b-4 border-black bg-[#FF0000] text-center shadow-xl text-[0.9rem] text-white font-semibold left-[-34px] top-[32px] w-[170px]">
              {"#" + rank}
            </div>
          </div> */}
        </div>
        <div className="py-1">
          <h2 className="line-clamp-1">{name}</h2>
          <p className="text-[0.9rem] text-[#8b8b8b]">{type}</p>
        </div>
      </div>
      {/* Modal Code */}
      <Modal
        title={name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{
          top: 30,
        }}
        width={1000}
      >
        <ModalContent image={image.webp.large_image_url} name={name} />
      </Modal>
    </>
  );
};

export default TopAiringCard;
