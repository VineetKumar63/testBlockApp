import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getContract } from "../contract/contract";
import Alert from "@mui/material/Alert";
import {schema} from '../utils/utility'

async function sendTransaction({ recipient, amount }) {
  if (!window.ethereum) {
    throw new Error("MetaMask is required.");
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = getContract(signer);

  const tx = await contract.sendMoney(recipient, {
    value: ethers.utils.parseEther(amount),
  });

  await tx.wait();
  return tx;
}

export default function SendMoneyForm() {
  const { isConnected } = useAccount();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: sendTransaction,
    onSuccess: () => {
      setSuccess("Transaction successful!");
      queryClient.invalidateQueries("transactions");
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const onSubmit = (data) => {
    setError("");
    setSuccess("");
    mutation.mutate(data);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Send Money
        </Typography>
        {!isConnected ? (
          <Typography color="error" align="center">
            Please connect your wallet to send money.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="recipient"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Recipient Address"
                  fullWidth
                  margin="normal"
                  error={!!errors.recipient}
                  helperText={errors.recipient?.message}
                />
              )}
            />
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Amount (ETH)"
                  fullWidth
                  margin="normal"
                  error={!!errors.amount}
                  helperText={errors.amount?.message}
                />
              )}
            />
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!isConnected || mutation.isLoading}
                startIcon={
                  mutation.isLoading ? <CircularProgress size={20} /> : null
                }
              >
                {mutation.isLoading ? "Processing..." : "Send Money"}
              </Button>
            </Box>
          </form>
        )}
        {error && <Alert severity="error">{error}</Alert>}

        {success && <Alert severity="success">{success}</Alert>}
      </Box>
    </Container>
  );
}
