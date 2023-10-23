import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const SignIn: React.FC = () => {
  


  return (
    <React.Fragment>

      <title>Adao</title>
      

      <main className="bg-base-200 min-h-full min-w-screen m-8">

      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">iTestPro</h1>
      <p className="py-6">Desbloqueie o Potencial do seu iPhone</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Esqueceu sua senha?</a>
          </label>
        </div>
        <div className="form-control mt-6">
  <Link to="/document/index" className="btn btn-primary">Entrar</Link>
</div>
      </form>
    </div>
  </div>
</div>
      </main>
    </React.Fragment>
  );
};

export default SignIn;
