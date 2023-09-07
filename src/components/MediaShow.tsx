import React from 'react';
import {AiFillDelete, AiFillPicture} from "react-icons/ai";
import {BsSoundwave} from "react-icons/bs";
import {questionStore} from "../store/questions.store.tsx";

const MediaShow = () => {
    const {setImage, setAudio, audio, image} = questionStore();
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!event.target.files) return;
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleAudioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!event.target.files) return;
        setAudio(URL.createObjectURL(event.target.files[0]));
    };

    const deleteMedia = (): void => {
        setImage(null);
        setAudio(null);
    };
    return (
        <div className="border-2 relative flex justify-center items-center border-dashed rounded mb-2 w-[500px] h-[300px] bg-[#917FB3]">
            <div className="flex flex-row items-center justify-around w-full">
                {!image && !audio && <>
                    <label
                        htmlFor="drop-picture"
                        className="flex flex-col items-center justify-center border border-gray-300 bg-[#917FB3] hover:bg-[#E5BEEC] transition border-dashed rounded-lg cursor-pointer"
                    >
                        <div className="flex flex-col items-center justify-center p-2">
                            <AiFillPicture className="text-white hover:text-black text-6xl"/>
                        </div>
                        <input
                            onChange={handleImageChange}
                            id="drop-picture"
                            accept="image/*"
                            multiple
                            type="file"
                            className="hidden"
                        />
                    </label>
                    <label
                        htmlFor="drop-sound"
                        className="flex flex-col items-center justify-center border border-gray-300 bg-[#917FB3] hover:bg-[#E5BEEC] transition border-dashed rounded-lg cursor-pointer"
                    >
                        <div className="flex flex-col items-center justify-center p-2">
                            <BsSoundwave className="text-white hover:text-black text-6xl"/>
                        </div>
                        <input
                            id="drop-sound"
                            type="file"
                            accept="audio/*"
                            onChange={handleAudioChange}
                            className="hidden"
                        />
                    </label>
                </>}
                {image && <img
                    src={image}
                    className="rounded object-contain w-[500px] h-[290px]"
                    alt="Uploaded"
                />}

                {audio && <audio controls src={audio}/>}
            </div>
            {image || audio ? <AiFillDelete
                className="absolute hover:text-red-600 transition text-white top-1 right-1 text-2xl cursor-pointer"
                onClick={deleteMedia}
            /> : null}
        </div>
    );
};

export default MediaShow;