# NextAuth Server-Side Session Check Bug

This repository demonstrates a common bug encountered when using NextAuth.js for authentication in Next.js applications. The issue arises when attempting to check the user's session on the server-side, resulting in unexpected behavior. 

## Problem Description:

The provided `MyComponent` attempts to verify the user's session using `unstable_getServerSession`. However, due to improper handling, it may fail to redirect unauthorized users correctly leading to potential security issues.

## Solution:

The solution involves ensuring that the `unstable_getServerSession` function is used correctly, checking that `session` is correctly validated and handling any errors that might occur during this process.