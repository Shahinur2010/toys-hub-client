import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h2 className='text-3xl font-semibold my-2 p-4 text-center'>Questions-Answers</h2>
            <div className="text-lg my-4 p-4">(1). Refresh tokens allow to balance users' access needs with organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose organization to data compromise or other malicious actions if a hacker is able to steal them. Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. The access token is stored in browser storage, in a cookie in client side, it can be safer than local browser storage but should not store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently. <br /> Refresh tokens are a way to obtain new access tokens without requiring the user to authenticate again. They are useful for long-lived applications that need to access protected resources on behalf of the user. Storing tokens in browser local storage provides persistence across page refreshes and browser tabs; however, if malicious users managed to run JavaScript in the SPA using a cross-site scripting (XSS) attack, they could retrieve the tokens stored in local storage. <br /> OAuth access tokens and refresh tokens should be encrypted and stored in a secure database. Our application should use a strong encryption standard such as AES.
            </div>
            <div className="text-lg my-4 p-4">(2). Key Differences between SQL and NoSQL databases: <br />
                ✔  SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. <br />
                ✔  Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. <br />
                ✔  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                ✔  SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. <br />
                ✔  Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.

            </div>
            <div className="text-lg my-4 p-4">(3). ExpressJS has 100x more public references to the package found in GitHub projects than NestJS. The more organized the team is, the better to rely strictly on Express. Performance-wise, both are equally capable, and as for scalability, while NestJS is a bit easier to scale.  NestJS follows the MVC (Model View Controller) architecture whereas ExpressJS does not. NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. The main difference between both frameworks is that NestJS is opinionated while ExpressJS is unopinionated. Express gives developers the freedom to make multiple possibilities and implement code as per the need. <br /> Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
            </div>
            <div className="text-lg my-4 p-4">(4).  In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents.  In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents. The aggregation framework is a set of analytics tools within MongoDB that allows us to run various types of reports or analysis on documents in one or more collections. Based on the idea of a pipeline. We take input from a MongoDB collection and pass the documents from that collection through one or more stages, each of which performs a different operation on it's inputs. Each stage takes as input whatever the stage before it produced as output. And the inputs and outputs for all stages are a stream of documents. The aggregation operations assemble values from various documents together and are able to execute a range of operations, such as average, sum, maximum, minimum etc. MongoDB supports three techniques to execute aggregation operations: <br/>

                ✔ Single-purpose aggregation <br />
                ✔ Aggregation pipeline <br/>
                ✔ Map-reduce function <br />

                Hence, aggregations are applied to a structure of query operations to the documents in a collection, decreasing and changing them as well.
            </div>
        </div>
    );
};

export default Blogs;