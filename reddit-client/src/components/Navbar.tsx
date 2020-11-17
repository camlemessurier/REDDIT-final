import { Box, Button, Flex, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
	const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
	const [{ data, fetching }] = useMeQuery();
	let body = null;

	if (fetching) {
	} else if (!data?.me) {
		body = (
			<>
				<NextLink href="/login">
					<Link color="white" mr={2}>
						Login
					</Link>
				</NextLink>
				<NextLink href="/register">
					<Link color="white">Register</Link>
				</NextLink>
			</>
		);
	} else {
		body = (
			<Flex>
				<Box mr={5}>{data.me.username}</Box>
				<Button
					color="white"
					variant="link"
					isLoading={logoutFetching}
					onClick={() => {
						logout();
					}}
				>
					Logout
				</Button>
			</Flex>
		);
	}

	return (
		<Flex bg="blue.400" p={4}>
			<Box ml={"auto"} color="white">
				{body}
			</Box>
		</Flex>
	);
};
