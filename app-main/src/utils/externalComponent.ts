export default async function externalComponent(url: string) {
  //@ts-ignore
  const name: any = 'AppPlugin'

  if (window[name]) return window[name]

  //@ts-ignore
  window[name] = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'module'
    script.async = true
    //@ts-ignore
    script.addEventListener('load', () => {
      resolve(window[name])
    })
    script.addEventListener('error', () => {
      reject(new Error(`Error loading ${url}`))
    })
    script.src = url
    document.head.appendChild(script)
  })

  return window[name]
}
