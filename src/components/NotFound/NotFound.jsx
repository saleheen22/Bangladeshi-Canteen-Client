import { Link } from "react-router-dom";
import Header from "../Header/Header";
import error from '../../assets/error.png';
import './NotFound.css';
export default function NotFound() {
    return (
        <div className="container">
            <Header></Header>
            <h1 className="text-center">Oops! You seem to be lost.</h1>
            <span className="image text-center d-flex justify-content-center"><img className="" src={error} alt="" /></span>
        </div>
    )
}