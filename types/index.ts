import { MouseEvent } from "react";

export interface CustomButtonProps {
    title : String;
    containerStyles? : string;
    handleClick?: MouseEvent<HTMLButtonElement>;
    btnType? : "button" | "submit" ;
}



export interface SearchManufacturerProps {
   manufacturer : String;
   setManufacturer : (manufacturer : String) => void;
}