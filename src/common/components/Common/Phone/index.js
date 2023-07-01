import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import {phone} from 'react-icons-kit/fa/phone'
import Link from "next/link";

export const PhoneWrapper = styled.div`
  border: 0;
  padding: 0;
  min-width: 150px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background-color: #f7af63;
  transition: all 0.3s ease;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 14px;
  }

  &:hover {
    background-color: #f1bd87;
  }

  img {
    margin-left: 11px;
    @media only screen and (max-width: 1440px) {
      margin-left: 10px;
    }
  }

  &:hover,
  &:focus {
    content: 0;
    box-shadow: none;
  }
  a{
    color: #fff
  }
`;