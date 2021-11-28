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
    },
    permissions: [
      'identity'
    ],
    oauth2: {
      client_id: '1002954059338-lmat1ot7tl8tuhlepf6s1ldjuluba4db.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/userinfo.email']
    }
  }
}

function writeManifest() {
  fs.writeJSON(r('extension/manifest.json'), getManifest(), { spaces: 2 })
}

writeManifest()
