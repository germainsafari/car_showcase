import exp from 'constants';
import {MouseEventHandler} from 'react'

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
     MouseEventHandler<HTMLButtonElement>;
     btnType?: "button" | "submit";
} 


export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer : (manufacturer: string) => void; 
}

export interface CarProps {
<<<<<<< HEAD
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}
=======
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

export interface OptionProps {
    title: string;
    value: string;
  }

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }  
>>>>>>> b4e2872532ae83373efb287491056ce5579f525e
