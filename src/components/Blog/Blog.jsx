import React, { useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pdf from "react-to-pdf";
import { Button } from 'react-bootstrap';

const Blog = () => {
    const ref = useRef();
    return (
        <div>
            <div>
                <Header></Header>
                <div className='container mt-5'><h2>This is the blog page</h2></div>
                <div className='container mt-5 d-flex-inline'>
                    <h3 className='me-5'> Click the Download Pdf button to get the blog info</h3>
                <Pdf targetRef={ref} filename="blog.pdf">
				{({ toPdf }) => (
					<Button onClick={toPdf} className='bg-danger w-25 text-white fw-semibold border-0'>
						Download Pdf
					</Button>
                    
				)}
			</Pdf>
                </div>
                <div className='container mt-5' ref={ref}>
                    
                    <div >
                        <h4>Differences between Controlled and Uncontrolled Components</h4>
                        <p>Ans: <br></br>

                            The data from the form element is handled by the React component (not the DOM) in a controlled component and maintained in the component's state. In essence, a controlled component overrides the HTML form components' default behavior.
                            <br />
                            On the other hand, Uncontrolled components are those that render form elements and let the DOM handle the form element's data by default. You may use a ref to gain access to the input's DOM node and retrieve its value.
                        </p>
                    </div>
                    <div>
                        <h4>How to validate React props using PropTypes?
                        </h4>
                        <p>
                            Here are some steps. <br></br>
                            1.Import PropTypes from the 'prop-types' package. <br></br>
                            2.Define the anticipated data type for each prop and indicate whether it is necessary or not.<br></br>
                            3.Put the PropTypes object in your component's propTypes property.
                        </p>
                    </div>
                    <div>
                        <h4>Difference Between Node js and Express js</h4>
                        <p>
                            JavaScript-based server-side event-driven i/o applications may be built using the Node.js platform. <br />
                            On the other hand, The Node.js-based Express.js framework is used to create web applications utilizing the event-driven architectural methods and ideas.
                        </p>
                    </div>
                    <div>
                        <h4>
                            What is a custom hook? Why wil you create a custom hook?
                        </h4>
                        <p>
                            A JavaScript function with the word "use" at the beginning and the ability to call other Hooks is known as a custom hook. <br></br>
                            To transfer stateful functionality between components in a reusable and manageable manner, custom hooks are mostly used in React. Using custom hooks, programmers can transform complex logic into reusable functions that are simple for many components to consume.

                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;