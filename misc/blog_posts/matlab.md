If you get the error:
```
MATLAB is selecting SOFTWARE rendering.
Command service threw an exception
Error loading /home/user/.MathWorks/ServiceHost/-mw_shared_installs/v2025.1.1.2/bin/glnxa64/mathworksservicehost/rcf/matlabconnector/serviceprocess/rcf/service/libmwmshrcfservice.so. libmwfoundation_crash_handling.so: cannot enable executable stack as shared object requires: Invalid argument: Success: Success
```
do:
```
patchelf --clear-execstack /home/user/.MathWorks/ServiceHost/-mw_shared_installs/v2024.13.0.2/bin/glnxa64/libmwfoundation_crash_handling.so
```