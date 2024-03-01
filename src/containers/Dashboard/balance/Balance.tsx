import React from "react";
import BalanceApi from "../../../api/balance/BalanceApi";
import css from "./balance.module.css";
import Popup from "reactjs-popup";

const Balance = () => {
  const { data } = BalanceApi.useGetBalanceQuery();
  console.log("data", data);

  const handleOpenPopup = () => {
    console.log("open popup");
  };

  const close = () => {
    console.log("close");
  };
  return (
    <section className={css.balanceContainer}>
      <div>
        <h1>6000 USD</h1>
        <div className={css.buttons}>
          <Popup trigger={<button>UPDATE</button>} modal>
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Modal Title </div>
              <div className="content">
                doloribus, voluptas rem alias. Vitae?
              </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  close modal
                </button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
      <div className={css.balanceInfo}>
        <p>Баланс в USD: $1000.00</p>
        <p>Баланс в RUB: ₽75000.00</p>
        <p>Баланс в USDT: $500.00</p>
        {/* Другие валюты и информация о балансе */}
      </div>
    </section>
  );
};
export default Balance;
