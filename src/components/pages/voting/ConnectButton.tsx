"use client"

import { useEffect } from 'react';
import { useTranslations } from "next-intl";

import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";

import { useTonConnectUI } from "@tonconnect/ui-react";
import { CHAIN } from "@tonconnect/protocol";

import { useTonConnect } from "../../../hooks/useTonConnect";
import { toast } from "../../../lib/helper";

const ConnectButton = ({ text }: { text: string }) => {
    const [tonConnectUI] = useTonConnectUI();
    const { connected, network, walletAddress } = useTonConnect();

    useEffect(() => {
        if (!network) return;
        if (network === CHAIN.TESTNET) {
            alert("Connect to mainnet");
            tonConnectUI.disconnect();
            return;
        }
        else if (network == CHAIN.MAINNET) {
            alert(walletAddress);
            return;
        }
    }, [network])

    const onConnectWallet = async () => {
        try {
            await tonConnectUI.openModal();
        } catch (e) {
            toast("errors.something_went_wrong_when_try_to_connect_ton_wallet", 'warning')
        }
    };

    return (
        connected ?
            (
                <Button onClick={async () => {
                    await tonConnectUI.disconnect()
                    toast("common.disconnected_from_ton_wallet", 'success')
                }}
                    className="max-w-[1100px] h-[50px] border border-white"
                    sx={{
                        borderRadius: "25px",
                        color: "common.black",
                        fontFamily:"InterSemiBold",
                        fontWeight: "600",
                        fontSize: "35px",
                        lineHeight:"normal"
                    }}
                    color="secondary" variant="contained"
                >DisConnect</Button>
            ) :
            (
                <Button onClick={onConnectWallet}
                    className="max-w-[1100px] h-[50px]"
                    sx={{
                        borderRadius: "25px",
                        color: "common.black",
                        fontFamily:"InterSemiBold",
                        fontWeight: "600",
                        fontSize: "35px",
                        lineHeight:"normal"
                    }}
                    color="secondary" variant="contained"
                >
                    {text}
                </Button>
            )
    )
}

export default ConnectButton;