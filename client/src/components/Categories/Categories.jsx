import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="categorie">
      <div className="col">
        <div className="row">
          <img
            src="https://improb.com/wp-content/uploads/2018/02/wallets-for-men-that-will-last-forever.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              SLIM
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://s.alicdn.com/@sc04/kf/H92a698c9daf042e1b63d39bfd5730afd7.jpg_300x300.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/2">
              LARGE
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://i.shgcdn.com/71ffc6d2-0841-4db9-958d-b2bd7bfbcae2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
          />
          <button>
            <Link className="link" to="/products/3">
              MEN
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.shgcdn.com/71ffc6d2-0841-4db9-958d-b2bd7bfbcae2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt=""
              />
              <button>
                <Link className="link" to="/products/4">
                  WOMEN
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://s.alicdn.com/@sc04/kf/H92a698c9daf042e1b63d39bfd5730afd7.jpg_300x300.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/5">
                  BAGS
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://improb.com/wp-content/uploads/2018/02/wallets-for-men-that-will-last-forever.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/6">
              DESK MATS
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
