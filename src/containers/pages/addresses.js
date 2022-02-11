import React from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import AddressCard from "../../components/utils/address-card";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { ProfileSectionTitleStyle } from "../../styles/mixins";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { PlusIcon } from "../../components/icons";
import "styled-components/macro";
import { Flex } from "../../components";
import { GoBackButton } from "../../components/button";
//import { useAddressesLogic } from "../../hooks";

const addresses = [
  {
    title: "Ev adresim",
    text: "Çeliktepe mah. Gülhatmi sk Sarmaşık..",
  },
  {
    title: "İş adresim",
    text: "Çeliktepe mah. Gülhatmi sk Sarmaşık..",
  },
];

function AddressesContainer() {
  const { t } = useTranslation();
  //const {} = useAddressesLogic();

  return (
    <>
      <Flex align="center" width="100%" css={``}>
        <GoBackButton />
        <h1
          css={`
            ${ProfileSectionTitleStyle}
          `}
        >
          {t(lnMap.my_addresses_title)}
        </h1>
      </Flex>
      <div
        css={`
          margin-top: 47px;
          width: 100%;
        `}
      >
        <Link
          to={`${ROUTES.PROFILE}${ROUTES.ADD_ADDRESS}`}
          css={`
            align-items: center;
            color: black;
            display: flex;
          `}
        >
          <PlusIcon />
          <p
            css={`
              margin-left: 9px;
            `}
          >
            {t(lnMap.action_add_new_address)}
          </p>
        </Link>
        <AddressCard.Grid>
          {addresses.map(({ title, text }) => (
            <AddressCard key={title}>
              <AddressCard.Title>{title}</AddressCard.Title>
              <AddressCard.Text>{text}</AddressCard.Text>
              <AddressCard.Button>{t(lnMap.action_change)}</AddressCard.Button>
            </AddressCard>
          ))}
        </AddressCard.Grid>
      </div>
    </>
  );
}

export default AddressesContainer;
