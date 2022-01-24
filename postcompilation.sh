#!/bin/bash

echo "NODE_ENV=production" > bin/.env
echo "LOGGER_SEPARATOR=\" - \"" >> bin/.env

TARGETS=('linux' 'macos' 'win')
for dest in "${TARGETS[@]}"; do
        mkdir -p bin/${dest}
        cp bin/.env bin/${dest}/
        cp database_production.sqlite bin/${dest}/
        cp assets/${dest}/* bin/${dest}
done

mv bin/hobby-paints-catalog-linux bin/linux/hpc
mv bin/hobby-paints-catalog-macos bin/macos/hpc
mv bin/hobby-paints-catalog-win.exe bin/win/hpc.exe

tar cfJ bin/linux.tar.xz bin/linux
tar cfJ bin/macos.tar.xz bin/macos
zip bin/win.zip bin/win
