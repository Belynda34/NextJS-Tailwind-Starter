import { MouseEvent } from "react";

export interface CustomButtonProps {
    title : String;
    containerStyles? : string;
    handleClick?: MouseEvent<HTMLButtonElement>;
}