export default function VaultPanel() {
  return (
    <div className="flex h-full w-full flex-col gap-1 ">
      <div className="h-12 w-full rounded-sm bg-green-200">menu panel</div>
      <div className="flex h-full w-full gap-1">
        <div className="w-72 rounded-sm bg-green-300">Item Selector</div>
        <div className="w-full rounded-sm bg-green-400">Vault Item Viewer</div>
      </div>
    </div>
  )
}
