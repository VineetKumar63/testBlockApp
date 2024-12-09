This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](/packages/create-rainbowkit).


Project Title: Ethereum Token Transfer DApp
Description:

This Next.js application allows users to send Ethereum tokens to specified addresses using a smart contract. It leverages React Query for efficient data fetching and mutation, React Hook Form for streamlined form handling, and Zod for robust input validation.


## Getting Started

**Installation:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Install dependencies:**
   ```bash
   cd your-repo-name
   npm install
   ```

**Setup:**

1. **Configure MetaMask:**
   - Install MetaMask and connect it to the desired Ethereum network (e.g., Goerli, Mainnet).
   - Ensure you have sufficient ETH to cover transaction fees.

2. **Deploy Smart Contract:**
   - Deploy your smart contract to the desired Ethereum network.
   - Update the `getContract` function in `contract/contract.js` with the deployed contract address and ABI.

**Usage:**

1. **Run the development server:**
   ```bash
   npm run dev
   ```
2. **Open the application in your browser:**
   - Access the application at `http://localhost:3000`.
3. **Connect your MetaMask wallet:**
   - Follow the on-screen instructions to connect your MetaMask wallet.
4. **Enter recipient address and amount:**
   - Fill in the required fields.
5. **Submit the transaction:**
   - Click the "Send Money" button.
6. **Confirm the transaction:**
   - Confirm the transaction in your MetaMask wallet.

**Key Technologies:**

- **Next.js:** A React framework for building web applications.
- **React Query:** For efficient data fetching and mutations.
- **React Hook Form:** For streamlined form handling and validation.
- **Zod:** For robust input validation.
- **Wagmi:** For wallet connection and interaction with the Ethereum network.
- **Ethers.js:** For interacting with the Ethereum blockchain.

**Additional Considerations:**

- **Security:** Prioritize security best practices to protect user funds and sensitive information.
- **User Experience:** Provide clear error messages, loading indicators, and confirmation messages to enhance the user experience.
- **Gas Fees:** Inform users about potential gas fees and provide estimates if possible.
- **Testing:** Thoroughly test your application to ensure its correctness and reliability.

By following these steps, you can effectively use this application to transfer Ethereum tokens.


## Learn More

To learn more about this stack, take a look at the following resources:

- [RainbowKit Documentation](https://rainbowkit.com) - Learn how to customize your wallet connection flow.
- [wagmi Documentation](https://wagmi.sh) - Learn how to interact with Ethereum.
- [Next.js Documentation](https://nextjs.org/docs) - Learn how to build a Next.js application.

You can check out [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
