import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
const Emailsection = () => {
    return (
        <div className='grid md:grid-cols-2 my-12md:my-12 py-24 gap-4'>
            <div>
                <h5 className=' text-xl fontbold text-white my-2'>Lets connect</h5>
                <p className='text-gray-500 mb-4 max-w-md'>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, architecto rerum laborum natus corrupti distinctio porro sint odit praesentium, animi debitis quos delectus maiores fuga, dolore cumque aperiam commodi veritatis!

                </p>
                <div className='socials flex flex-row gap-4'>
                    <Link href="https://github.com/Sakthivicky">
                        <FaGithub size={30} className='text-white' />
                    </Link>

                    <Link href="Linkedin.com">
                        <FaLinkedin size={30} className='text-white' />
                    </Link>

                </div>
            </div>
            <div>
                <form className='flex flex-col'>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white text-sm'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            required
                            placeholder='abc@gmail.com'
                            className='p-3 bg-[#18191E] border border-[#3333f] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg w-full mt-2'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white text-sm'>Subject</label>
                        <input
                            type='text'
                            id='subject'
                            required
                            placeholder='Say hi'
                            className='p-3 bg-[#18191E] border border-[#3333f] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg w-full mt-2'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white text-sm'>Message</label>
                        <textarea
                            id='message'
                            required
                            placeholder='Write your message here...'
                            rows={4}
                            className='p-3 bg-[#18191E] border border-[#3333f] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg w-full mt-2'
                        ></textarea>
                    </div>
                    <button type='submit' className='bg-purple-400 hover:bg-purple-600 py-2.5 font-medium rounded-lg w-full'
                    > Send Messages</button>

                </form>

            </div>
        </div>
    )
}

export default Emailsection
