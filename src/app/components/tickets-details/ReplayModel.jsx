"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "react-quill/dist/quill.snow.css";
import "./tickets-details.css";
import axiosInstance, { baseUrl } from "@/utils/constants";
import Loader from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReplayModel = ({ open, onClose, id }) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axiosInstance.post(
        `${baseUrl}/ticket/reply/${id}`,
        {
          content: value,
        },
      );
      console.log(response);
      setIsloading(false);
      onClose();
    } catch (error) {
      console.log(error);
      setIsloading(false);
      toast.error("Something went wrong");
    }
  };
  if (typeof document && document != undefined) {
    return (
      <>
        <ToastContainer />
        <Popup open={open} onClose={onClose} position="right center">
          <form onSubmit={handleSubmit}>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              formats={formats}
            />
            <div className="reply-modal">
              <button
                className="reply hover"
                type="submit"
                style={
                  isLoading
                    ? {
                        padding: "3px 32px",
                      }
                    : {}
                }
              >
                {isLoading ? <Loader /> : "Reply"}
              </button>
            </div>
          </form>
        </Popup>
      </>
    );
  }
};

export default ReplayModel;
