import logo from '../../images/logo.png'
import linked from '../../images/linked.png'
import github from '../../images/github.png'
import user from '../../images/user.png'

export default function Footer() {
  
  return (
    <footer  className=" px-2 sm:px-4 py-2.5 bg-gradient-to-t from-blue-800 to-blue-900 text-gray-50">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="#" target="_blank" class="flex items-center mb-4 sm:mb-0">
          <img src={logo} class="mr-4 h-8" alt="We pay Logo" />
        </a>
        <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
            <img src={user} class="mr-4 h-8" alt="user logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rod-raymond-281a0284/" target="_blank" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
              <img src={linked} class="mr-4 h-8" alt="linkedin logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/rraymond67" target="_blank" class="mr-4 hover:underline md:mr-6 dark:text-gray-400">
            <img src={github} class="mr-4 h-8" alt="Github logo" />  
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-white-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" target="_blank" class="hover:underline">WePay™</a>. All Rights Reserved.
      </span>
    </footer>
  )
}
