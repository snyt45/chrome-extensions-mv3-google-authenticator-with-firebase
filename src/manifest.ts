import fs from 'fs-extra'
import { r } from '../scripts/utils'

const getManifest = () => {
  return {
    manifest_version: 3,
    name: 'Getting Started Example',
    description: 'Build an Extension!',
    version: '1.0',
    action: {
      default_popup: './dist/popup/index.html'
    }
  }
}

function writeManifest() {
  fs.writeJSON(r('extension/manifest.json'), getManifest(), { spaces: 2 })
}

writeManifest()
