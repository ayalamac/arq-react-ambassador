import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {User} from "../models/user";

const Header = (props: { user: User }) => {
    const [title, setTitle] = useState('Welcome');
    const [description, setDescription] = useState('Share links to earn money');

    useEffect(() => {
        if (props.user?.id) {
            setTitle(`$${props.user.revenue}`);
            setDescription('You have earned this far');
        } else {
            setTitle('Welcome');
            setDescription('Share links to earn money');
        }
    }, [props.user]);

    let buttons;

    if (!props.user?.id) {
        buttons = (
            <p>
            <Link to={'/login'} className="btn btn-primary border-white bg-transparent my-2 mr-3" style={{display: 'inline-block', marginRight: '10px'}}>Sign in</Link>
            <Link to={'/register'} className="btn btn-primary my-2" style={{display: 'inline-block'}}>Create account</Link>
            </p>
        )
    }

    return (
        <section className="py-5 text-center container bg-dark">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto text-white">
                    <h1 className="fw-light">{title}</h1>
                    <p className="lead text-white">{description}</p>
                    {buttons}
                </div>
            </div>
        </section>
    );
};

export default connect(
    (state: { user: User }) => ({
        user: state.user
    })
)(Header);
