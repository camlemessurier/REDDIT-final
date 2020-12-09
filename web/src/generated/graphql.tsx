import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  incidentReports: PaginatedReports;
  IncidentReport?: Maybe<IncidentReport>;
  posts: PaginatedPosts;
  post?: Maybe<Post>;
  me?: Maybe<User>;
};


export type QueryIncidentReportsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryIncidentReportArgs = {
  id: Scalars['Int'];
};


export type QueryPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type PaginatedReports = {
  __typename?: 'PaginatedReports';
  incidentReports: Array<IncidentReport>;
  hasMore: Scalars['Boolean'];
};

export type IncidentReport = {
  __typename?: 'IncidentReport';
  id: Scalars['Int'];
  title: Scalars['String'];
  creatorId: Scalars['Int'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  isReviewed?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['String']>;
  reviewDate?: Maybe<Scalars['String']>;
  incidentDatetime: Scalars['String'];
  incidentLocation: Scalars['String'];
  incidentDetails: Scalars['String'];
  incidentWitnesses: Scalars['String'];
  take5Completed: Scalars['String'];
  SWMScompleted: Scalars['String'];
  fatiguePlanCompleted: Scalars['String'];
  siteProceduresFollowed: Scalars['String'];
  injurySustained: Scalars['String'];
  equipmentDamaged: Scalars['String'];
  injuryNature: Scalars['String'];
  injuryLocation: Scalars['String'];
  injuryAgency: Scalars['String'];
  stoppedWork: Scalars['String'];
  treatmentRecieved: Scalars['String'];
  treatmentDetails: Scalars['String'];
  equipmentCompany: Scalars['String'];
  equipmentItem: Scalars['String'];
  damageDetails: Scalars['String'];
  causalFactors: Scalars['String'];
  recurrenceLiklihood: Scalars['String'];
  outcomeSeverity: Scalars['String'];
  resultingRisk: Scalars['String'];
  actionsTaken: Scalars['String'];
  actionDate: Scalars['String'];
  actionPerson: Scalars['String'];
  textSnippet: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  posts: Array<Post>;
  hasMore: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  text: Scalars['String'];
  points: Scalars['Int'];
  voteStatus?: Maybe<Scalars['Int']>;
  creatorId: Scalars['Int'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  textSnippet: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  reviewIncidentReport: Scalars['Boolean'];
  createIncidentReport: IncidentReport;
  updateIncidentReport?: Maybe<IncidentReport>;
  deleteIncidentReport: Scalars['Boolean'];
  createPost: Post;
  updatePost?: Maybe<Post>;
  deletePost: Scalars['Boolean'];
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationReviewIncidentReportArgs = {
  id: Scalars['Int'];
  username: Scalars['String'];
};


export type MutationCreateIncidentReportArgs = {
  input: IncidentReportInput;
};


export type MutationUpdateIncidentReportArgs = {
  input: IncidentReportInput;
  id: Scalars['Int'];
};


export type MutationDeleteIncidentReportArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationUpdatePostArgs = {
  text: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type IncidentReportInput = {
  title: Scalars['String'];
  incidentDatetime: Scalars['String'];
  incidentLocation: Scalars['String'];
  incidentDetails: Scalars['String'];
  incidentWitnesses: Scalars['String'];
  take5Completed: Scalars['String'];
  SWMScompleted: Scalars['String'];
  fatiguePlanCompleted: Scalars['String'];
  siteProceduresFollowed: Scalars['String'];
  injurySustained: Scalars['String'];
  equipmentDamaged: Scalars['String'];
  injuryNature: Scalars['String'];
  injuryLocation: Scalars['String'];
  injuryAgency: Scalars['String'];
  stoppedWork: Scalars['String'];
  treatmentRecieved: Scalars['String'];
  treatmentDetails: Scalars['String'];
  equipmentCompany: Scalars['String'];
  equipmentItem: Scalars['String'];
  damageDetails: Scalars['String'];
  causalFactors: Scalars['String'];
  recurrenceLiklihood: Scalars['String'];
  outcomeSeverity: Scalars['String'];
  resultingRisk: Scalars['String'];
  actionsTaken: Scalars['String'];
  actionDate: Scalars['String'];
  actionPerson: Scalars['String'];
  isReviewed?: Maybe<Scalars['String']>;
};

export type PostInput = {
  title: Scalars['String'];
  text: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type IncidentReportFragment = (
  { __typename?: 'IncidentReport' }
  & Pick<IncidentReport, 'id' | 'title' | 'createdAt' | 'reviewer' | 'isReviewed' | 'reviewDate' | 'incidentDatetime' | 'incidentLocation' | 'incidentDetails' | 'incidentWitnesses' | 'take5Completed' | 'SWMScompleted' | 'fatiguePlanCompleted' | 'siteProceduresFollowed' | 'injurySustained' | 'equipmentDamaged' | 'injuryNature' | 'injuryLocation' | 'injuryAgency' | 'stoppedWork' | 'treatmentRecieved' | 'treatmentDetails' | 'equipmentItem' | 'equipmentCompany' | 'damageDetails' | 'causalFactors' | 'resultingRisk' | 'recurrenceLiklihood' | 'outcomeSeverity' | 'actionsTaken' | 'actionDate' | 'actionPerson'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type IncidentReportSnippetFragment = (
  { __typename?: 'IncidentReport' }
  & Pick<IncidentReport, 'id' | 'title' | 'createdAt' | 'isReviewed' | 'textSnippet'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type PostSnippetFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'textSnippet'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateIncidentReportMutationVariables = Exact<{
  input: IncidentReportInput;
}>;


export type CreateIncidentReportMutation = (
  { __typename?: 'Mutation' }
  & { createIncidentReport: (
    { __typename?: 'IncidentReport' }
    & Pick<IncidentReport, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'incidentDatetime' | 'incidentLocation' | 'incidentDetails' | 'incidentWitnesses' | 'take5Completed' | 'SWMScompleted' | 'siteProceduresFollowed' | 'fatiguePlanCompleted' | 'injurySustained' | 'equipmentDamaged' | 'equipmentCompany' | 'equipmentItem' | 'damageDetails' | 'causalFactors' | 'recurrenceLiklihood' | 'outcomeSeverity' | 'resultingRisk' | 'actionsTaken' | 'actionDate' | 'actionPerson' | 'isReviewed'>
  ) }
);

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'text' | 'points' | 'creatorId'>
  ) }
);

export type DeleteIncidentReportMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteIncidentReportMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteIncidentReport'>
);

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePost'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type ReviewIncidentReportMutationVariables = Exact<{
  id: Scalars['Int'];
  username: Scalars['String'];
}>;


export type ReviewIncidentReportMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'reviewIncidentReport'>
);

export type UpdateIncidentReportMutationVariables = Exact<{
  input: IncidentReportInput;
  id: Scalars['Int'];
}>;


export type UpdateIncidentReportMutation = (
  { __typename?: 'Mutation' }
  & { updateIncidentReport?: Maybe<(
    { __typename?: 'IncidentReport' }
    & Pick<IncidentReport, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'incidentDatetime' | 'incidentLocation' | 'incidentDetails' | 'incidentWitnesses' | 'take5Completed' | 'SWMScompleted' | 'siteProceduresFollowed' | 'fatiguePlanCompleted' | 'injurySustained' | 'equipmentDamaged' | 'equipmentCompany' | 'equipmentItem' | 'damageDetails' | 'causalFactors' | 'recurrenceLiklihood' | 'outcomeSeverity' | 'resultingRisk' | 'actionsTaken' | 'actionDate' | 'actionPerson' | 'isReviewed'>
  )> }
);

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  text: Scalars['String'];
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & { updatePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'text' | 'textSnippet'>
  )> }
);

export type IncidentReportQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type IncidentReportQuery = (
  { __typename?: 'Query' }
  & { IncidentReport?: Maybe<(
    { __typename?: 'IncidentReport' }
    & IncidentReportFragment
  )> }
);

export type IncidentReportsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type IncidentReportsQuery = (
  { __typename?: 'Query' }
  & { incidentReports: (
    { __typename?: 'PaginatedReports' }
    & Pick<PaginatedReports, 'hasMore'>
    & { incidentReports: Array<(
      { __typename?: 'IncidentReport' }
      & IncidentReportSnippetFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'text'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type PostsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PaginatedPosts' }
    & Pick<PaginatedPosts, 'hasMore'>
    & { posts: Array<(
      { __typename?: 'Post' }
      & PostSnippetFragment
    )> }
  ) }
);

export const IncidentReportFragmentDoc = gql`
    fragment IncidentReport on IncidentReport {
  id
  title
  creator {
    id
    username
  }
  createdAt
  reviewer
  isReviewed
  reviewDate
  incidentDatetime
  incidentLocation
  incidentDetails
  incidentWitnesses
  take5Completed
  SWMScompleted
  fatiguePlanCompleted
  siteProceduresFollowed
  injurySustained
  equipmentDamaged
  injuryNature
  injuryLocation
  injuryAgency
  stoppedWork
  treatmentRecieved
  treatmentDetails
  equipmentItem
  equipmentCompany
  damageDetails
  causalFactors
  resultingRisk
  recurrenceLiklihood
  outcomeSeverity
  actionsTaken
  actionDate
  actionPerson
}
    `;
export const IncidentReportSnippetFragmentDoc = gql`
    fragment IncidentReportSnippet on IncidentReport {
  id
  title
  creator {
    id
    username
  }
  createdAt
  isReviewed
  textSnippet
}
    `;
export const PostSnippetFragmentDoc = gql`
    fragment PostSnippet on Post {
  id
  createdAt
  updatedAt
  title
  textSnippet
  creator {
    id
    username
  }
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateIncidentReportDocument = gql`
    mutation CreateIncidentReport($input: IncidentReportInput!) {
  createIncidentReport(input: $input) {
    id
    createdAt
    updatedAt
    title
    incidentDatetime
    incidentLocation
    incidentDetails
    incidentWitnesses
    take5Completed
    SWMScompleted
    siteProceduresFollowed
    fatiguePlanCompleted
    injurySustained
    equipmentDamaged
    equipmentCompany
    equipmentItem
    damageDetails
    causalFactors
    recurrenceLiklihood
    outcomeSeverity
    resultingRisk
    actionsTaken
    actionDate
    actionPerson
    isReviewed
  }
}
    `;
export type CreateIncidentReportMutationFn = Apollo.MutationFunction<CreateIncidentReportMutation, CreateIncidentReportMutationVariables>;

/**
 * __useCreateIncidentReportMutation__
 *
 * To run a mutation, you first call `useCreateIncidentReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIncidentReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIncidentReportMutation, { data, loading, error }] = useCreateIncidentReportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIncidentReportMutation(baseOptions?: Apollo.MutationHookOptions<CreateIncidentReportMutation, CreateIncidentReportMutationVariables>) {
        return Apollo.useMutation<CreateIncidentReportMutation, CreateIncidentReportMutationVariables>(CreateIncidentReportDocument, baseOptions);
      }
export type CreateIncidentReportMutationHookResult = ReturnType<typeof useCreateIncidentReportMutation>;
export type CreateIncidentReportMutationResult = Apollo.MutationResult<CreateIncidentReportMutation>;
export type CreateIncidentReportMutationOptions = Apollo.BaseMutationOptions<CreateIncidentReportMutation, CreateIncidentReportMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    id
    createdAt
    updatedAt
    title
    text
    points
    creatorId
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeleteIncidentReportDocument = gql`
    mutation DeleteIncidentReport($id: Int!) {
  deleteIncidentReport(id: $id)
}
    `;
export type DeleteIncidentReportMutationFn = Apollo.MutationFunction<DeleteIncidentReportMutation, DeleteIncidentReportMutationVariables>;

/**
 * __useDeleteIncidentReportMutation__
 *
 * To run a mutation, you first call `useDeleteIncidentReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIncidentReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIncidentReportMutation, { data, loading, error }] = useDeleteIncidentReportMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIncidentReportMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIncidentReportMutation, DeleteIncidentReportMutationVariables>) {
        return Apollo.useMutation<DeleteIncidentReportMutation, DeleteIncidentReportMutationVariables>(DeleteIncidentReportDocument, baseOptions);
      }
export type DeleteIncidentReportMutationHookResult = ReturnType<typeof useDeleteIncidentReportMutation>;
export type DeleteIncidentReportMutationResult = Apollo.MutationResult<DeleteIncidentReportMutation>;
export type DeleteIncidentReportMutationOptions = Apollo.BaseMutationOptions<DeleteIncidentReportMutation, DeleteIncidentReportMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($id: Int!) {
  deletePost(id: $id)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, baseOptions);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ReviewIncidentReportDocument = gql`
    mutation reviewIncidentReport($id: Int!, $username: String!) {
  reviewIncidentReport(id: $id, username: $username)
}
    `;
export type ReviewIncidentReportMutationFn = Apollo.MutationFunction<ReviewIncidentReportMutation, ReviewIncidentReportMutationVariables>;

/**
 * __useReviewIncidentReportMutation__
 *
 * To run a mutation, you first call `useReviewIncidentReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReviewIncidentReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reviewIncidentReportMutation, { data, loading, error }] = useReviewIncidentReportMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useReviewIncidentReportMutation(baseOptions?: Apollo.MutationHookOptions<ReviewIncidentReportMutation, ReviewIncidentReportMutationVariables>) {
        return Apollo.useMutation<ReviewIncidentReportMutation, ReviewIncidentReportMutationVariables>(ReviewIncidentReportDocument, baseOptions);
      }
export type ReviewIncidentReportMutationHookResult = ReturnType<typeof useReviewIncidentReportMutation>;
export type ReviewIncidentReportMutationResult = Apollo.MutationResult<ReviewIncidentReportMutation>;
export type ReviewIncidentReportMutationOptions = Apollo.BaseMutationOptions<ReviewIncidentReportMutation, ReviewIncidentReportMutationVariables>;
export const UpdateIncidentReportDocument = gql`
    mutation UpdateIncidentReport($input: IncidentReportInput!, $id: Int!) {
  updateIncidentReport(input: $input, id: $id) {
    id
    createdAt
    updatedAt
    title
    incidentDatetime
    incidentLocation
    incidentDetails
    incidentWitnesses
    take5Completed
    SWMScompleted
    siteProceduresFollowed
    fatiguePlanCompleted
    injurySustained
    equipmentDamaged
    equipmentCompany
    equipmentItem
    damageDetails
    causalFactors
    recurrenceLiklihood
    outcomeSeverity
    resultingRisk
    actionsTaken
    actionDate
    actionPerson
    isReviewed
  }
}
    `;
export type UpdateIncidentReportMutationFn = Apollo.MutationFunction<UpdateIncidentReportMutation, UpdateIncidentReportMutationVariables>;

/**
 * __useUpdateIncidentReportMutation__
 *
 * To run a mutation, you first call `useUpdateIncidentReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIncidentReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIncidentReportMutation, { data, loading, error }] = useUpdateIncidentReportMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateIncidentReportMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIncidentReportMutation, UpdateIncidentReportMutationVariables>) {
        return Apollo.useMutation<UpdateIncidentReportMutation, UpdateIncidentReportMutationVariables>(UpdateIncidentReportDocument, baseOptions);
      }
export type UpdateIncidentReportMutationHookResult = ReturnType<typeof useUpdateIncidentReportMutation>;
export type UpdateIncidentReportMutationResult = Apollo.MutationResult<UpdateIncidentReportMutation>;
export type UpdateIncidentReportMutationOptions = Apollo.BaseMutationOptions<UpdateIncidentReportMutation, UpdateIncidentReportMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: Int!, $title: String!, $text: String!) {
  updatePost(id: $id, title: $title, text: $text) {
    id
    title
    text
    textSnippet
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, baseOptions);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const IncidentReportDocument = gql`
    query IncidentReport($id: Int!) {
  IncidentReport(id: $id) {
    ...IncidentReport
  }
}
    ${IncidentReportFragmentDoc}`;

/**
 * __useIncidentReportQuery__
 *
 * To run a query within a React component, call `useIncidentReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncidentReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncidentReportQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIncidentReportQuery(baseOptions: Apollo.QueryHookOptions<IncidentReportQuery, IncidentReportQueryVariables>) {
        return Apollo.useQuery<IncidentReportQuery, IncidentReportQueryVariables>(IncidentReportDocument, baseOptions);
      }
export function useIncidentReportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IncidentReportQuery, IncidentReportQueryVariables>) {
          return Apollo.useLazyQuery<IncidentReportQuery, IncidentReportQueryVariables>(IncidentReportDocument, baseOptions);
        }
export type IncidentReportQueryHookResult = ReturnType<typeof useIncidentReportQuery>;
export type IncidentReportLazyQueryHookResult = ReturnType<typeof useIncidentReportLazyQuery>;
export type IncidentReportQueryResult = Apollo.QueryResult<IncidentReportQuery, IncidentReportQueryVariables>;
export const IncidentReportsDocument = gql`
    query IncidentReports($limit: Int!, $cursor: String) {
  incidentReports(limit: $limit, cursor: $cursor) {
    hasMore
    incidentReports {
      ...IncidentReportSnippet
    }
  }
}
    ${IncidentReportSnippetFragmentDoc}`;

/**
 * __useIncidentReportsQuery__
 *
 * To run a query within a React component, call `useIncidentReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncidentReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncidentReportsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useIncidentReportsQuery(baseOptions: Apollo.QueryHookOptions<IncidentReportsQuery, IncidentReportsQueryVariables>) {
        return Apollo.useQuery<IncidentReportsQuery, IncidentReportsQueryVariables>(IncidentReportsDocument, baseOptions);
      }
export function useIncidentReportsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IncidentReportsQuery, IncidentReportsQueryVariables>) {
          return Apollo.useLazyQuery<IncidentReportsQuery, IncidentReportsQueryVariables>(IncidentReportsDocument, baseOptions);
        }
export type IncidentReportsQueryHookResult = ReturnType<typeof useIncidentReportsQuery>;
export type IncidentReportsLazyQueryHookResult = ReturnType<typeof useIncidentReportsLazyQuery>;
export type IncidentReportsQueryResult = Apollo.QueryResult<IncidentReportsQuery, IncidentReportsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    id
    createdAt
    updatedAt
    title
    text
    creator {
      id
      username
    }
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts($limit: Int!, $cursor: String) {
  posts(limit: $limit, cursor: $cursor) {
    hasMore
    posts {
      ...PostSnippet
    }
  }
}
    ${PostSnippetFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;