import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/InputField";
import { Layout } from "../../../components/Layout";
import {
	usePostQuery,
	useUpdatePostMutation,
} from "../../../generated/graphql";
import { useGetIntId } from "../../../utils/useGetIntId";
import { useIsAuth } from "../../../utils/useIsAuth";

const EditPost = ({}) => {
	useIsAuth();
	const router = useRouter();
	const intId = useGetIntId();
	const { data, loading } = usePostQuery({
		skip: intId === -1,
		variables: {
			id: intId,
		},
	});
	const [updatePost] = useUpdatePostMutation();

	if (loading) {
		return (
			<Layout>
				<div>loading</div>
			</Layout>
		);
	}

	if (!data?.post) {
		return (
			<Layout>
				<div>could no find post</div>
			</Layout>
		);
	}

	return (
		<Layout variant="small">
			<Formik
				initialValues={{ title: data.post.title, text: data.post.text }}
				onSubmit={async (values) => {
					updatePost({ variables: { id: intId, ...values } });
					router.back();
				}}
			>
				{({ isSubmitting }) => (
					<>
						<Form>
							<InputField name="title" label="title" placeholder="title" />
							<Box mt={4}>
								<InputField
									type="textarea"
									name="text"
									label="text"
									placeholder="text..."
								/>
							</Box>

							<Button
								mt={4}
								type="submit"
								isLoading={isSubmitting}
								colorScheme="teal"
							>
								Update Post
							</Button>
						</Form>
					</>
				)}
			</Formik>
		</Layout>
	);
};

export default EditPost;
