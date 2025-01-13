export default function TruthyRenderer({
  children,
  value,
}: {
  children: React.ReactNode;
  value: boolean;
}) {
  if (value) {
    return children;
  }
  return null;
}
