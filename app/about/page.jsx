import React from 'react'
import profile from './../../assets/profile.jpg'
import Image from 'next/image'
const page = () => {
  return (
    <div className='flex flex-col gap-5 px-20 py-10 tracking-widest'>
<div className='bg-slate-300 p-10'>
<h1 className='font-extrabold'>Stories from the Studio: My Journey with Clay and Creativity</h1>
<br />
<h3 className='font-medium'>A New Chapter Begins</h3>
</div>
      
      <hr />
      <Image alt='' src={profile} height={400}  className='m-auto border-8 border-slate-300 rounded-lg'/>
      <p className='indent-5 '>Hello and welcome to the first entry in my journal! My name is Evelyn, and I’m a mother of two, living right here in Charlotte, NC. This journal is where I’ll be sharing my journey, both as a mom and as a creator, as I dive into a new adventure: ceramics.
<br />
How It All Began.
<br />
It all started on a regular day—between school drop-offs, cleaning up, and working on projects around the house. I’ve always loved art and working with my hands, but between family and other responsibilities, I hadn’t really pursued it. But one evening, after putting the kids to bed, I felt the urge to try something new, something just for myself.
<br />
The next week, I signed up for a local ceramics class. I still remember the feel of the clay under my hands for the first time. It was messy and imperfect, but there was a kind of peace in shaping something from nothing. Every piece felt like a little story, told through each unique shape and texture.
<br />
Turning Passion into Purpose.
<br />
As time went on, I realized how much joy this new hobby brought me. It was more than just a break; it felt like a calling. And so, with encouragement from family and friends, I decided to take a leap. I opened my own little ceramics shop here in Charlotte.
<br />
Now, every piece I make is created with love and a sense of purpose. Each mug, bowl, and vase holds a story—of late-night inspiration, the occasional “help” from my kids, and the dream of sharing my craft with the world.
<br />
What’s to Come
<br />
This journal will be my place to document this journey: the highs, the lows, and all the messy in-betweens. I’ll share stories from the studio, lessons learned, behind-the-scenes photos, and maybe even a few tutorials for anyone who wants to try their hand at ceramics.
<br />
Thank you for being here. I can’t wait to share more stories and hope you’ll enjoy following along as my passion for ceramics continues to grow.
<br />
Stay tuned for more entries soon!
</p>
<hr />
    </div>
  )
}

export default page
 